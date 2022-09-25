import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { TemplatesModule } from '../../templates/templates.module';


@NgModule({
  declarations: [],
  imports: [
    TemplatesModule,
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
