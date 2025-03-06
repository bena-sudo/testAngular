import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-idomas',
  imports: [TranslateModule],
  templateUrl: './idomas.component.html',
  styleUrl: './idomas.component.css',
})
export class IdomasComponent {
  currentLang = 'es';

  constructor(private translate: TranslateService) {
    translate.addLangs(['es', 'va']);
    translate.setDefaultLang(this.currentLang);
  }

  switchLanguage() {
    this.currentLang = this.currentLang === 'es' ? 'va' : 'es';
    this.translate.use(this.currentLang);
  }
}
