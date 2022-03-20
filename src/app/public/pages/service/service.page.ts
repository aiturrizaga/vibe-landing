import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from "@angular/cdk/layout";
import { ConstantService } from "@vibe/shared/services";

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styles: []
})
export class ServicePage implements OnInit, OnDestroy {

  showBrochure = false;
  pdfSrc = '';

  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  constructor(private constantService: ConstantService,
              private changeDetectorRef: ChangeDetectorRef,
              private media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  toggleBrochure() {
    this.showBrochure = !this.showBrochure;
  }

  openBrochure(pdfSrc: string) {
    if (this.mobileQuery.matches) {
      this.pdfSrc = pdfSrc;
      const link = document.createElement('a');
      link.href = pdfSrc;
      link.target = '_blank';
      link.click();
    } else {
      this.pdfSrc = pdfSrc + '#toolbar=0&statusbar=0&navpanes=0&zoom=40';
      this.toggleBrochure();
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }

}
