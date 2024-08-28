import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('home') homeElement!: ElementRef;
  @ViewChild('about') aboutElement!: ElementRef;
  @ViewChild('interface') interfaceElement!: ElementRef;
  @ViewChild('faculty') facultyElement!: ElementRef;
  @ViewChild('contact') contactElement!: ElementRef;

  private sectionMap = new Map<string, ElementRef>();

  ngAfterViewInit() {
    this.sectionMap.set('home', this.homeElement);
    this.sectionMap.set('about', this.aboutElement);
    this.sectionMap.set('interface', this.interfaceElement);
    this.sectionMap.set('faculty', this.facultyElement);
    this.sectionMap.set('contact', this.contactElement);
  }

  scrollTo(section: string): void {
    const element = this.sectionMap.get(section);
    if (element) {
      element.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
