import {NgModule} from '@angular/core';
import {CommonModule, DatePipe, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {AppRoutingModule} from '../../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProposeCafeComponent} from './propose-cafe/propose-cafe.component';
import {ModalComponent} from './_modal/modal.component';
import { AgmCoreModule } from '@agm/core';
import {NgSelectModule} from '@ng-select/ng-select';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatCardModule, MatCheckboxModule, MatDialogModule, MatDialogRef} from '@angular/material';
import {PhotoUploadComponent} from './photo-upload/photo-upload.component';
import {FileUploadModule} from 'ng2-file-upload';
import {InterceptorService} from '../../service/interceptors/interceptor.service';
import {AuthServiceConfig} from 'angularx-social-login';
import {provideConfig} from '../../config/GoogleAuthConfig';
import {SWIPER_CONFIG, SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {LowerNavBarComponent} from './lower-nav-bar/lower-nav-bar.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {FooterComponent} from './footer/footer.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    NavBarComponent,
    ProposeCafeComponent,
    ModalComponent,
    PhotoUploadComponent,
    LowerNavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC7q2v0VgRy60dAoItfv3IJhfJQEEoeqCI',
      libraries: ['places', 'geometry']
    }),
    NgSelectModule,
    MDBBootstrapModule,
    MatCheckboxModule,
    MatDialogModule,
    MatCardModule,
    FileUploadModule,
    NgxPageScrollModule
  ],
  exports: [
    LowerNavBarComponent,
    NavBarComponent,
    CommonModule,
    TranslateModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule,
    NgSelectModule,
    MDBBootstrapModule,
    MatCheckboxModule,
    MatDialogModule,
    MatCardModule,
    FileUploadModule,
    ProposeCafeComponent,
    ModalComponent,
    PhotoUploadComponent,
    NgxPageScrollModule,
    FooterComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    { provide: MatDialogRef, useValue: {} },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: false }
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    DatePipe
  ]
})
export class CoreModule {}

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(
    httpClient,
    './assets/i18n/',
    '.json'
  );
}
