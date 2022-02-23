import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    console.log('Directiva ACTIVADA!!');
    // el.nativeElement.style.backgroundColor = 'red';
   }

   @Input('appResaltado') nuevoColor: string = ''

   @HostListener('mouseenter') mouseEntra() {
    this.el.nativeElement.style.backgroundColor = this.nuevoColor || 'yellow';
   }

   @HostListener('mouseleave') mouseSalio() {
    this.el.nativeElement.style.backgroundColor = null;
   }

}
