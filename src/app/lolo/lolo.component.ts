import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-lolo',
  templateUrl: './lolo.component.html',
  styleUrls: ['./lolo.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoloComponent implements OnInit, AfterViewInit {
  @ViewChild('myParagraph', { static: false }) myParagraph: ElementRef;
  @Input() overrideStyleHref: string = "/assets/wc-library/css/override.css";

  constructor(
    private el: ElementRef,
    private renderer:Renderer2
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.createOverrideStyleElement();
  }

  createOverrideStyleElement() {
    const link = this.renderer.createElement('link');
    link.rel = "stylesheet";
    link.href = this.overrideStyleHref;
    // this.renderer.setAttribute(this.inputElement.nativeElement, 'value', 'name' );

    this.renderer.insertBefore(
      this.el.nativeElement,
      link,
      this.myParagraph.nativeElement
    );
  }

}
