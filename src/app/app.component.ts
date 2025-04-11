import { Component, HostListener } from '@angular/core';
import { QueryList, ViewChildren, ElementRef, AfterViewInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
 return
  }

  corde = {x:0,y:0};

  @ViewChildren('circleDiv') circleElements!: QueryList<ElementRef<HTMLDivElement>>;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.corde.x = event.clientX;
    this.corde.y = event.clientY;
    this.animate();
  }
  animate() {
    let x = this.corde.x;
    let y = this.corde.y;
    this.circleElements.forEach((circle, index) => {
      circle.nativeElement.style.left = `${x+4}px`;
      circle.nativeElement.style.top = `${y+2}px`;
      circle.nativeElement.style.scale  = `${(24 - index) / 24}`;

      const nextc = this.circleElements.get(index + 1) || this.circleElements.get(0);
      if (nextc) {
        x += (nextc.nativeElement.offsetLeft - x)*0.25;
        y += (nextc.nativeElement.offsetTop - y)*0.25;
      }
    });
    requestAnimationFrame(this.animate)
  }
  

  createFloatingGlow() {
    const container = document.querySelector('.floating-container');
    const dot = document.createElement('div');
    dot.className = 'floating-dot';

    // Random position near scroll
    dot.style.left = Math.random() * window.innerWidth + 'px';
    dot.style.top = (window.scrollY + window.innerHeight / 2) + 'px';

    container?.appendChild(dot);

    setTimeout(() => {
      dot.remove();
    }, 2000);
  }
}


