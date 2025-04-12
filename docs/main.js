(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XlM":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function ChatComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 7);
} if (rf & 2) {
    const msg_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", msg_r1.className)("innerHTML", msg_r1.text, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
class ChatComponent {
    constructor(http) {
        this.http = http;
        this.userInput = '';
        this.chatHistory = [
            { text: 'Radhey Radhey 🙏 , Krishna is listening...', className: 'bot' },
        ];
        // these are some of the longest long form content which we has
        this.userData = '';
        this.botData = '';
        this.a1 = 'sk-proj-DEE8BiF--';
        this.a2 = 'bRtoD8ltvfg1064CICqUXhp5zNtrD9oNgjcxPdBuYqivl8tUHb7bfy5cs2HJ_';
        this.a3 = 'hawJT3BlbkFJWxORKCCNTANwVRAxAmeWhfaFIuZ2Rwh0hTRhdMAqUCwbCocv5_LNs-uGuTPwgj-t5F5VLrX6QA';
        this.API_KEY = this.a1 + this.a2 + this.a3;
        this.messages = [
            {
                role: 'system',
                content: 'You are an AI assistant knowledgeable in the Bhagavad Gita. Provide insightful responses using relevant verses and explanations. Make it more detailed. and length should be more than 500 words ',
            },
        ];
    }
    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.sendMessage();
        }
    }
    sendMessage() {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userMessage = this.userInput.trim();
            this.userInput = '';
            this.userData = userMessage;
            if (!userMessage)
                return;
            this.messages.push({ role: 'user', content: userMessage });
            this.displayMessage('You: ' + userMessage, 'user');
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.API_KEY}`,
            });
            const body = {
                model: 'ft:gpt-4o-mini-2024-07-18:personal::B204xqSk',
                messages: this.messages,
            };
            try {
                const response = yield this.http
                    .post('https://api.openai.com/v1/chat/completions', body, { headers })
                    .toPromise();
                const botMessage = ((_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.choices) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.content) || 'Sorry, I couldn’t understand.';
                this.botData = botMessage;
                this.messages.push({ role: 'assistant', content: botMessage });
                const formatted = this.formatGitaResponse(botMessage);
                this.displayMessage('Guru : ' + formatted, 'bot');
                this.appendToGitHubFile(); // optional method if you define it
            }
            catch (error) {
                console.error('API error:', error);
                this.displayMessage('Guru: Something went wrong. Please try again.', 'bot');
            }
        });
    }
    displayMessage(text, className) {
        this.chatHistory.push({ text, className });
        setTimeout(() => {
            const chatbox = document.getElementById('chatbox');
            if (chatbox) {
                chatbox.scrollTop = chatbox.scrollHeight;
            }
        });
    }
    formatGitaResponse(response) {
        const parts = response.split(/(Meaning:|Explanation:|Guidance:)/);
        const formattedSections = [];
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i].trim();
            if (['Meaning:', 'Explanation:', 'Guidance:'].includes(part)) {
                formattedSections.push(`<h4>${part.replace(':', '')}</h4>`);
            }
            else if (part) {
                formattedSections.push(`<p>${part}</p>`);
            }
        }
        return `📖 ${formattedSections.join('')}`;
    }
    appendToGitHubFile() {
        // Optional: placeholder for your GitHub file update logic
        console.log('appendToGitHubFile called');
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 8, vars: 2, consts: [["id", "chat-container"], ["src", "../../assets/Chakra.png", "alt", "Rotating Icon", 1, "rotating-img"], ["id", "chatbox"], [3, "ngClass", "innerHTML", 4, "ngFor", "ngForOf"], [1, "chat-input-container"], ["type", "text", "id", "userInput", "placeholder", "Ask something about Bhagavad Gita...", 3, "ngModel", "ngModelChange", "keypress"], [3, "click"], [3, "ngClass", "innerHTML"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ChatComponent_div_3_Template, 1, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_5_listener($event) { return ctx.userInput = $event; })("keypress", function ChatComponent_Template_input_keypress_5_listener($event) { return ctx.handleKeyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_6_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.chatHistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userInput);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["#chatbox[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    height: 450px;\r\n    overflow-y: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #fff;\r\n}\r\n\r\n.message[_ngcontent-%COMP%] {\r\n    max-width: 80%;\r\n    padding: 10px 15px;\r\n    margin: 5px;\r\n    border-radius: 15px;\r\n    line-height: 1.4;\r\n    word-wrap: break-word;\r\n}\r\n.user[_ngcontent-%COMP%] {\r\n    border-radius: 20px;\r\n    margin-top: 10px;\r\n    padding: 15px;\r\n    align-self: flex-end;\r\n    background-color: #ecd7b7;\r\n    color: rgba(0, 0, 0, 0.651);\r\n    text-align: right;\r\n    transition: 0.5s;\r\n}\r\n.bot[_ngcontent-%COMP%] {\r\n    border-radius: 20px;\r\n    padding: 15px;\r\n    margin-top: 10px;\r\n    align-self: flex-start;\r\n    background-color: #fcd78d;\r\n    color: #000000;\r\n    text-align: left;\r\n    transition: 0.5s;\r\n}\r\n\r\n.chat-input-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    padding: 10px;\r\n    border-top: 1px solid #ddd;\r\n    background-color: #f9f9f9;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    padding: 12px;\r\n    border-radius: 20px;\r\n    border: 1px solid #ccc;\r\n    outline: none;\r\n    font-size: 16px;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n    background-color: #f5af19;\r\n    color: white;\r\n    border: none;\r\n    padding: 12px 20px;\r\n    border-radius: 20px;\r\n    cursor: pointer;\r\n    font-size: 16px;\r\n    margin-left: 10px;\r\n    transition: 0.3s;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n \r\n    color: white;\r\n    transform: translateY(-4px);\r\n    box-shadow: 0 0 2px 1px #f5af19;\r\n}\r\n.bot[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 3px black;\r\n \r\n}\r\n.user[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 3px rgb(232, 227, 227);\r\n\r\n}\r\n\r\n#chatbox[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n#chatbox[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background-color: #bbbbbb94;\r\n    border-radius: 50px;\r\n}\r\n\r\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n\r\n    margin: 0px !important;\r\n  }\r\n\r\n[_nghost-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 90vh;       \r\n\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;    \r\n    background-image: url('bg2.png');\r\n    background-size: cover;         \r\n    background-position: center;    \r\n    background-repeat: no-repeat;   \r\n  }\r\n#chat-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 10px;     \r\n    left: 20px;   \r\n  \r\n    width: 100%;\r\n    max-width: 800px;\r\n    height: 475px;\r\n  \r\n    border: 1px solid #ccc;\r\n    padding: 16px;\r\n    border-radius: 10px;\r\n    background: rgb(255, 255, 255);\r\n    box-shadow: 0 4px 12px rgba(241, 243, 111, 0.1);\r\n  \r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n.rotating-img[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n    height: 60px;\r\n    margin: 0 auto 16px auto; \r\n    animation: spin 4s linear infinite;\r\n    display: block;\r\n  }\r\n\r\n@keyframes spin {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n  \r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsWUFBWTtBQUNaO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7QUFFQSxhQUFhO0FBQ2I7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUVBLHVCQUF1QjtBQUN2QjtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUVBOztJQUVJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsK0JBQStCO0FBQ25DO0FBRUE7SUFDSSx5QkFBeUI7O0FBRTdCO0FBRUE7SUFDSSxzQ0FBc0M7O0FBRTFDO0FBRUEsY0FBYztBQUNkO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCO0FBRUEsNERBQTREO0FBQzVEOztJQUVJLHNCQUFzQjtFQUN4QjtBQUVBLGtDQUFrQztBQUNsQztJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZLFFBQVEseUJBQXlCOztJQUU3QyxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQixLQUFLLCtCQUErQjtJQUNwRCxnQ0FBNkM7SUFDN0Msc0JBQXNCLFVBQVUsbUNBQW1DO0lBQ25FLDJCQUEyQixLQUFLLHFCQUFxQjtJQUNyRCw0QkFBNEIsSUFBSSxpQkFBaUI7RUFDbkQ7QUFHQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTLE1BQU0sb0JBQW9CO0lBQ25DLFVBQVUsSUFBSSxzQkFBc0I7O0lBRXBDLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTs7SUFFYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsK0NBQStDOztJQUUvQyxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCO0FBR0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QixFQUFFLHdDQUF3QztJQUNsRSxrQ0FBa0M7SUFDbEMsY0FBYztFQUNoQjtBQUVBLHdCQUF3QjtBQUN4QjtJQUNFO01BQ0UsdUJBQXVCO0lBQ3pCOztJQUVBO01BQ0UseUJBQXlCO0lBQzNCO0VBQ0YiLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIENoYXRib3ggKi9cclxuI2NoYXRib3gge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4vKiBNZXNzYWdlcyAqL1xyXG4ubWVzc2FnZSB7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi51c2VyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZDdiNztcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUxKTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmJvdCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZDc4ZDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi8qIENoYXQgSW5wdXQgU2VjdGlvbiAqL1xyXG4uY2hhdC1pbnB1dC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YWYxOTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycHggMXB4ICNmNWFmMTk7XHJcbn1cclxuXHJcbi5ib3Q6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCBibGFjaztcclxuIFxyXG59XHJcblxyXG4udXNlcjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYigyMzIsIDIyNywgMjI3KTtcclxuXHJcbn1cclxuXHJcbi8qIFNjcm9sbGJhciAqL1xyXG4jY2hhdGJveDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxufVxyXG5cclxuI2NoYXRib3g6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmJiYmI5NDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbi8qIE1ha2Ugc3VyZSB0aGUgYm9keSB0YWtlcyBmdWxsIGhlaWdodCBhbmQgcmVtb3ZlcyBtYXJnaW4gKi9cclxuYm9keSwgaHRtbCB7XHJcblxyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLyogVXNlIGZsZXhib3ggdG8gY2VudGVyIGNvbnRlbnQgKi9cclxuICA6aG9zdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA5MHZoOyAgICAgICAvKiBGdWxsIHZpZXdwb3J0IGhlaWdodCAqL1xyXG5cclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAgICAvKiDwn5SlIFByZXZlbnQgZXh0cmEgc2Nyb2xsaW5nICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9iZzIucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgICAgICAgIC8qIFN0cmV0Y2ggdG8gY292ZXIgZW50aXJlIHNjcmVlbiAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAgICAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAgIC8qIE5vIHJlcGVhdGluZyAqL1xyXG4gIH1cclxuICBcclxuICBcclxuICAjY2hhdC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4OyAgICAgLyogTWFyZ2luIGZyb20gdG9wICovXHJcbiAgICBsZWZ0OiAyMHB4OyAgIC8qIE1hcmdpbiBmcm9tIHJpZ2h0ICovXHJcbiAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBoZWlnaHQ6IDQ3NXB4O1xyXG4gIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDI0MSwgMjQzLCAxMTEsIDAuMSk7XHJcbiAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnJvdGF0aW5nLWltZyB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDE2cHggYXV0bzsgLyogY2VudGVyIGhvcml6b250YWxseSArIGJvdHRvbSBtYXJnaW4gKi9cclxuICAgIGFuaW1hdGlvbjogc3BpbiA0cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLyogQW5pbWF0aW9uIGtleWZyYW1lcyAqL1xyXG4gIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\harsh\Desktop\Krishna.AI\sgp\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 0, consts: [[1, "bg"], [1, "landing-hero"], [1, "welcome-content"], ["src", "../../assets/Chakra.png", "alt", "Krishna playing flute", 1, "krishna-img"], [1, "welcome-title", "my-font"], [1, "welcome-para"], [1, "start-button-container"], ["routerLink", "/chat", 1, "start-chat-btn", "my-font"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome to Krishna AI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Dive deep into the eternal wisdom of the Bhagavad Gita. Let the divine words of Lord Krishna guide your path, inspire your heart, and awaken your inner consciousness. Ask, learn, and grow through the teachings that transcend time and space. \uD83C\uDF3C\uD83D\uDD49\uFE0F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Krishna AI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".bg[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 90vh;       \r\n\r\n    margin: 0; ;\r\n    padding: 0;\r\n    overflow: hidden;    \r\n    background-image: url('h-img.png');\r\n    background-size: cover;         \r\n    background-position: center;    \r\n    background-repeat: no-repeat;   \r\n  }\r\n\r\n  @keyframes spin {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n  \r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n  .landing-hero[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 40px 20px;\r\n\r\n    background: linear-gradient(to bottom, #fff7e6, #fef6d3); \r\n    color: #5a3e0c;\r\n    font-family: 'Georgia', serif;\r\n  }\r\n\r\n  .welcome-content[_ngcontent-%COMP%] {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .krishna-img[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: auto;\r\n    animation: spin 3s linear infinite;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .welcome-title[_ngcontent-%COMP%] {\r\n    font-size: 2.8rem;\r\n    font-weight: bold;\r\n    color: #d4942a;\r\n    margin-bottom: 15px;\r\n    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\r\n  }\r\n\r\n  .welcome-para[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n    line-height: 1.8;\r\n    color: #704c16;\r\n    background-color: rgba(255, 255, 255, 0.6);\r\n    border-radius: 12px;\r\n    padding: 20px;\r\n    box-shadow: 0 0 15px rgba(244, 194, 80, 0.3);\r\n  }\r\n\r\n  \r\n\r\n  @keyframes float {\r\n    0% { transform: translateY(0px); }\r\n    50% { transform: translateY(-15px); }\r\n    100% { transform: translateY(0px); }\r\n  }\r\n\r\n  .start-button-container[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n  }\r\n\r\n  .start-chat-btn[_ngcontent-%COMP%] {\r\n    background: linear-gradient(145deg, #fdd591, #f7b733);\r\n    border: none;\r\n    padding: 15px 35px;\r\n    font-size: 1.1rem;\r\n    font-weight: bold;\r\n    color: #4c2c06;\r\n    border-radius: 30px;\r\n    cursor: pointer;\r\n    box-shadow: 0 8px 20px rgba(251, 191, 36, 0.5);\r\n    transition: all 0.3s ease;\r\n    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.6);\r\n    font-family: 'Georgia', serif;\r\n  }\r\n\r\n  .start-chat-btn[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.05);\r\n    background: linear-gradient(145deg, #f7b733, #fdd591);\r\n    box-shadow: 0 10px 25px rgba(251, 191, 36, 0.6);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZLFFBQVEseUJBQXlCOztJQUU3QyxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQixLQUFLLCtCQUErQjtJQUNwRCxrQ0FBK0M7SUFDL0Msc0JBQXNCLFVBQVUsbUNBQW1DO0lBQ25FLDJCQUEyQixLQUFLLHFCQUFxQjtJQUNyRCw0QkFBNEIsSUFBSSxpQkFBaUI7RUFDbkQ7O0VBRUE7SUFDRTtNQUNFLHVCQUF1QjtJQUN6Qjs7SUFFQTtNQUNFLHlCQUF5QjtJQUMzQjtFQUNGOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjs7SUFFbEIsd0RBQXdELEVBQUUsZ0JBQWdCO0lBQzFFLGNBQWM7SUFDZCw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix5Q0FBeUM7RUFDM0M7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwwQ0FBMEM7SUFDMUMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw0Q0FBNEM7RUFDOUM7O0VBRUEsNkJBQTZCOztFQUM3QjtJQUNFLEtBQUssMEJBQTBCLEVBQUU7SUFDakMsTUFBTSw0QkFBNEIsRUFBRTtJQUNwQyxPQUFPLDBCQUEwQixFQUFFO0VBQ3JDOztFQUdBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UscURBQXFEO0lBQ3JELFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiw4Q0FBOEM7SUFDOUMseUJBQXlCO0lBQ3pCLCtDQUErQztJQUMvQyw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIscURBQXFEO0lBQ3JELCtDQUErQztFQUNqRCIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogOTB2aDsgICAgICAgLyogRnVsbCB2aWV3cG9ydCBoZWlnaHQgKi9cclxuXHJcbiAgICBtYXJnaW46IDA7IDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAgICAvKiDwn5SlIFByZXZlbnQgZXh0cmEgc2Nyb2xsaW5nICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9oLWltZy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICAgICAgICAgLyogU3RyZXRjaCB0byBjb3ZlciBlbnRpcmUgc2NyZWVuICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICAgIC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICAgLyogTm8gcmVwZWF0aW5nICovXHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxhbmRpbmctaGVybyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZjdlNiwgI2ZlZjZkMyk7IC8qIHNvZnQgZ29sZGVuICovXHJcbiAgICBjb2xvcjogIzVhM2UwYztcclxuICAgIGZvbnQtZmFtaWx5OiAnR2VvcmdpYScsIHNlcmlmO1xyXG4gIH1cclxuICBcclxuICAud2VsY29tZS1jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmtyaXNobmEtaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAud2VsY29tZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIuOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNkNDk0MmE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC53ZWxjb21lLXBhcmEge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgY29sb3I6ICM3MDRjMTY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMjQ0LCAxOTQsIDgwLCAwLjMpO1xyXG4gIH1cclxuICBcclxuICAvKiBmbG9hdGluZyBpbWFnZSBhbmltYXRpb24gKi9cclxuICBAa2V5ZnJhbWVzIGZsb2F0IHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxyXG4gIH1cclxuICBcclxuXHJcbiAgLnN0YXJ0LWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXJ0LWNoYXQtYnRuIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmZGQ1OTEsICNmN2I3MzMpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTVweCAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNGMyYzA2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgyNTEsIDE5MSwgMzYsIDAuNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICBmb250LWZhbWlseTogJ0dlb3JnaWEnLCBzZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXJ0LWNoYXQtYnRuOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjZjdiNzMzLCAjZmRkNTkxKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoMjUxLCAxOTEsIDM2LCAwLjYpO1xyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = ["circleDiv"];
class AppComponent {
    constructor() {
        this.corde = { x: 0, y: 0 };
    }
    title(title) {
        return;
    }
    onMouseMove(event) {
        this.corde.x = event.clientX;
        this.corde.y = event.clientY;
        this.animate();
    }
    animate() {
        let x = this.corde.x;
        let y = this.corde.y;
        this.circleElements.forEach((circle, index) => {
            circle.nativeElement.style.left = `${x + 4}px`;
            circle.nativeElement.style.top = `${y + 2}px`;
            circle.nativeElement.style.scale = `${(24 - index) / 24}`;
            const nextc = this.circleElements.get(index + 1) || this.circleElements.get(0);
            if (nextc) {
                x += (nextc.nativeElement.offsetLeft - x) * 0.25;
                y += (nextc.nativeElement.offsetTop - y) * 0.25;
            }
        });
        requestAnimationFrame(this.animate);
    }
    createFloatingGlow() {
        const container = document.querySelector('.floating-container');
        const dot = document.createElement('div');
        dot.className = 'floating-dot';
        // Random position near scroll
        dot.style.left = Math.random() * window.innerWidth + 'px';
        dot.style.top = (window.scrollY + window.innerHeight / 2) + 'px';
        container === null || container === void 0 ? void 0 : container.appendChild(dot);
        setTimeout(() => {
            dot.remove();
        }, 2000);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.circleElements = _t);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function AppComponent_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 39, vars: 0, consts: [[1, "nav-container"], [1, "nav-logo"], ["src", "../assets/web1.png", "alt", "Logo"], [1, "nav-links"], ["routerLink", "/"], ["routerLink", "/about"], ["routerLink", "/chat"], ["routerLink", "/contact"], [1, "circle"], ["circleDiv", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Krishna AI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Gita");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 8, 9);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".nav-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 70px;\r\n    background: linear-gradient(to left, #f5af19, #eacfaf);\r\n    color: white;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0 30px;\r\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1000;\r\n  }\r\n\r\n\r\n  .circle[_ngcontent-%COMP%]{\r\n    z-index: 9999;  \r\n    height: 24px;\r\n    width: 24px;\r\n    border-radius: 24px;\r\n    background-color: #E49B0F;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n\r\n\r\n  body[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  }\r\n\r\n\r\n  .nav-logo[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 12px;\r\n  }\r\n\r\n\r\n  .nav-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 50%;\r\n  }\r\n\r\n\r\n  .nav-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  }\r\n\r\n\r\n  .nav-links[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    list-style: none;\r\n    gap: 40px;\r\n    margin-right: 60px;\r\n  }\r\n\r\n\r\n  .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: white;\r\n    font-weight: 500;\r\n    font-size: 20px;\r\n    position: relative;\r\n    transition: color 0.3s ease;\r\n  }\r\n\r\n\r\n  .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: -6px;\r\n    left: 0;\r\n    width: 0%;\r\n    height: 2px;\r\n    background-color: white;\r\n    transition: width 0.3s ease;\r\n  }\r\n\r\n\r\n  .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #ffe082;\r\n  }\r\n\r\n\r\n  .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::after {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n  .nav-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 42px;\r\n    width: 42px;\r\n    border-radius: 50%;\r\n    border: 2px solid white;\r\n    transition: transform 0.3s ease;\r\n  }\r\n\r\n\r\n  .nav-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n    transform: rotate(360deg);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzREFBc0Q7SUFDdEQsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixhQUFhO0VBQ2Y7OztFQUdBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87RUFDVDs7O0VBR0E7SUFDRSxTQUFTO0lBQ1QsNERBQTREO0VBQzlEOzs7RUFHQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztFQUNYOzs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOzs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsNERBQTREO0VBQzlEOzs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGtCQUFrQjtFQUNwQjs7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDJCQUEyQjtFQUM3Qjs7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsMkJBQTJCO0VBQzdCOzs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7OztFQUVBO0lBQ0UsV0FBVztFQUNiOzs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QiwrQkFBK0I7RUFDakM7OztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2Y1YWYxOSwgI2VhY2ZhZik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmNpcmNsZXtcclxuICAgIHotaW5kZXg6IDk5OTk7ICBcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNDlCMEY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuXHJcbiAgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICBcclxuICAubmF2LWxvZ28ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtbG9nbyBpbWcge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtbG9nbyBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAubmF2LWxpbmtzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZ2FwOiA0MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG4gIH1cclxuICBcclxuICAubmF2LWxpbmtzIGxpIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgLm5hdi1saW5rcyBsaSBhOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTZweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMCU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAubmF2LWxpbmtzIGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmUwODI7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtbGlua3MgbGkgYTpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtcHJvZmlsZSBpbWcge1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtcHJvZmlsZSBpbWc6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.component */ "+XlM");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");

 // Import FormsModule




 //

class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ "+XlM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");


// import { AboutComponent } from './components/about/about.component';



// import { ContactComponent } from './components/contact/contact.component';
const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    // { path: 'about', component: AboutComponent },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"] },
    // { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' } // fallback route
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map