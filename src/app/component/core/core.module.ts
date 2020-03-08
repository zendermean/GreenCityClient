import {NgModule} from '@angular/core';
import {CommonModule, DatePipe, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {NavBarComponent} from '../user/nav-bar/nav-bar.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {HttpLoaderFactory} from '../../app.module';
import {AppRoutingModule} from '../../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProposeCafeComponent} from '../user/propose-cafe/propose-cafe.component';
import {ModalComponent} from '../user/_modal/modal.component';
import { AgmCoreModule } from '@agm/core';
import {NgSelectModule} from '@ng-select/ng-select';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatCardModule, MatCheckboxModule, MatDialogModule, MatDialogRef} from '@angular/material';
import {PhotoUploadComponent} from '../user/photo-upload/photo-upload.component';
import {FileUploadModule} from 'ng2-file-upload';
import {InterceptorService} from '../../service/interceptors/interceptor.service';
import {AuthServiceConfig} from 'angularx-social-login';
import {provideConfig} from '../../config/GoogleAuthConfig';
import {SWIPER_CONFIG, SwiperConfigInterface} from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    NavBarComponent,
    ProposeCafeComponent,
    ModalComponent,
    PhotoUploadComponent
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
    FileUploadModule
  ],
  exports: [
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
    PhotoUploadComponent
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
