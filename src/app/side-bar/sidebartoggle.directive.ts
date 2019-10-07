import { Component, Output, EventEmitter, HostListener, Directive } from '@angular/core';
import { SideBarService } from './side-bar.service';

@Directive({
  selector: '[atsSidebartoggle]'
})
export class SidebartoggleDirective {

  constructor(
    private sideBarService: SideBarService
  ) { }

  @HostListener('click')
  click() {
    this.sideBarService.toggle();
  }

}
