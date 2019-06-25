import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({selector:'[appEvidenzia]'})
export class EvidenziaDirective implements OnInit {

    constructor(private el : ElementRef){}

    ngOnInit(): void{
        this.el.nativeElement.style.backgroundColor = this.coloreEvidenzia;
    }

    @Input('appEvidenzia')
    coloreEvidenzia : string = 'yellow';

    @Input()
    coloreMouseOver : string = 'gold';

    @HostListener('mouseenter')
    onMouseEnter(){
        this.el.nativeElement.style.backgroundColor = this.coloreMouseOver;
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        this.el.nativeElement.style.backgroundColor = this.coloreEvidenzia;
    }

}