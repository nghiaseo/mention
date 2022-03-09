import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMention]'
})
export class MentionDirective {
  mentioning = false;
  mentioningString = '';
  mentionStart = 0;

  constructor(private el:ElementRef) {

   }
   @HostListener('keydown',['$event'])
   keyDownEvent(event:KeyboardEvent){
     if(event.key==='Backspace'){
       if(this.el.nativeElement.value[this.el.nativeElement.selectionStart-1]==='@'){
         this.mentioning = false;
       }
     }
   }

   @HostListener('keyup',['$event'])
   keyUpEvent(event:KeyboardEvent){
     if(event.key==='@'){
       this.mentioning = true;
       this.mentionStart = this.el.nativeElement.selectionStart;
     }
     if(this.mentioning){
       const ms = this.el.nativeElement.value.substring(this.mentionStart,this.el.nativeElement.selectionStart)
      console.log(ms)
    }
   }

}
