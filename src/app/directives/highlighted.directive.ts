import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  standalone: true
})
export class HighlightedDirective {

  constructor() {}
  @Input() appHighlighted?:boolean;
  @Output() OnToggleHighlighted=new EventEmitter<boolean>();
  @HostBinding('class.red-shadow')
  get cssClass(){
    return this.appHighlighted;
  }
  @HostBinding('style.borderLeft')
  get cssStyle(){
    if(this.appHighlighted)
      return '2px solid red'
    else
      return '2px solid green'
  }
  @HostListener('mouseenter')
  onMouseenter(){
    this.appHighlighted=true;
    this.cssClass;
    this.OnToggleHighlighted.emit(this.appHighlighted);
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.appHighlighted=false;
    this.OnToggleHighlighted.emit(this.appHighlighted);
  }

  onToggle(){
    this.appHighlighted=!this.appHighlighted;
    this.OnToggleHighlighted.emit(this.appHighlighted);
  }

}
