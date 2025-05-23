// Importing necessary modules from Angular core library
import { Directive, ElementRef, HostListener } from "@angular/core";

// Decorator to define a directive with a selector '[appHighlight]'
// This means any HTML element with this attribute will use this directive
@Directive({ selector: "[appHighlight]" })
export class HighlightDirective {
  // Injecting ElementRef to get a reference to the DOM element the directive is attached to
  constructor(private el: ElementRef) {}

  // HostListener listens to the 'mouseenter' event on the host element (i.e., the element with appHighlight)
  // When mouse enters the element, this method is triggered
  @HostListener("mouseenter") onMouseEnter() {
    // Sets the background color of the host element to a darker shade of blue
    this.el.nativeElement.style.backgroundColor = "#1565c0";
  }

  // HostListener listens to the 'mouseleave' event on the host element
  // When mouse leaves the element, this method is triggered
  @HostListener("mouseleave") onMouseLeave() {
    // Resets the background color of the host element to its original state (removes inline style)
    this.el.nativeElement.style.backgroundColor = null;
  }
}
