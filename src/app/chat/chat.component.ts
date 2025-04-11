import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  userInput: string = '';
  chatHistory: { text: string; className: 'user' | 'bot' }[] = [
    {text: 'Welcome to Krishna.AI! Ask me anything about the Bhagavad Gita.', className: 'bot'},
  ];

  userData: string = '';
  botData: string = '';

  private a1 = 'sk-proj-DEE8BiF--';
  private a2 = 'bRtoD8ltvfg1064CICqUXhp5zNtrD9oNgjcxPdBuYqivl8tUHb7bfy5cs2HJ_';
  private a3 = 'hawJT3BlbkFJWxORKCCNTANwVRAxAmeWhfaFIuZ2Rwh0hTRhdMAqUCwbCocv5_LNs-uGuTPwgj-t5F5VLrX6QA';
  private API_KEY = this.a1 + this.a2 + this.a3;

  private messages = [
    {
      role: 'system',
      content:
        'You are an AI assistant knowledgeable in the Bhagavad Gita. Provide insightful responses using relevant verses and explanations. Make it more detailed. and length should be more than 500 words ',
    },
  ];

  constructor(private http: HttpClient) {}

  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }

  async sendMessage(): Promise<void> {
    const userMessage = this.userInput.trim();
    this.userInput = '';
    this.userData = userMessage;

    if (!userMessage) return;

    this.messages.push({ role: 'user', content: userMessage });
    this.displayMessage('You: ' + userMessage, 'user');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.API_KEY}`,
    });

    const body = {
      model: 'ft:gpt-4o-mini-2024-07-18:personal::B204xqSk',
      messages: this.messages,
    };

    try {
      const response: any = await this.http
        .post('https://api.openai.com/v1/chat/completions', body, { headers })
        .toPromise();

      const botMessage: string =
        response?.choices?.[0]?.message?.content || 'Sorry, I couldn’t understand.';
      this.botData = botMessage;

      this.messages.push({ role: 'assistant', content: botMessage });

      const formatted = this.formatGitaResponse(botMessage);
      this.displayMessage('Guru : ' + formatted, 'bot');

      this.appendToGitHubFile(); // optional method if you define it
    } catch (error) {
      console.error('API error:', error);
      this.displayMessage('Guru: Something went wrong. Please try again.', 'bot');
    }
  }

  displayMessage(text: string, className: 'user' | 'bot'): void {
    this.chatHistory.push({ text, className });
    setTimeout(() => {
      const chatbox = document.getElementById('chatbox');
      if (chatbox) {
        chatbox.scrollTop = chatbox.scrollHeight;
      }
    });
  }

  formatGitaResponse(response: string): string {
    const parts = response.split(/(Meaning:|Explanation:|Guidance:)/);
    const formattedSections: string[] = [];

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i].trim();
      if (['Meaning:', 'Explanation:', 'Guidance:'].includes(part)) {
        formattedSections.push(`<h4>${part.replace(':', '')}</h4>`);
      } else if (part) {
        formattedSections.push(`<p>${part}</p>`);
      }
    }

    return `📖 ${formattedSections.join('')}`;
  }

  appendToGitHubFile(): void {
    // Optional: placeholder for your GitHub file update logic
    console.log('appendToGitHubFile called');
  }
}
