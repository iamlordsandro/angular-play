import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WebComponentsComponent } from './web-components.component';

import { AccordionComponent } from './atoms/accordion/accordion.component';
import { AlertComponent } from './atoms/alert/alert.component';
import { AvatarComponent } from './atoms/avatar/avatar.component';
import { BadgeComponent } from './atoms/badge/badge.component';
import { BreadcrumbComponent } from './atoms/breadcrumb/breadcrumb.component';
import { ButtonComponent } from './atoms/button/button.component';
import { CardComponent } from './atoms/card/card.component';
import { CarouselComponent } from './atoms/carousel/carousel.component';
import { DropdownComponent } from './atoms/dropdown/dropdown.component';
import { ExternalLinkAnchorComponent } from './atoms/external-link-anchor/external-link-anchor.component';
import { IconComponent } from './atoms/icon/icon.component';
import { InputComponent } from './atoms/input/input.component';
import { ListGroupComponent } from './atoms/list-group/list-group.component';
import { LogoComponent } from './atoms/logo/logo.component';
import { PageTitleComponent } from './atoms/page-title/page-title.component';
import { ProgressBarComponent } from './atoms/progress-bar/progress-bar.component';
import { SliderComponent } from './atoms/slider/slider.component';
import { SpinnerComponent } from './atoms/spinner/spinner.component';
import { SwitchComponent } from './atoms/switch/switch.component';
import { TypewriterComponent } from './atoms/typewriter/typewriter.component';
import { UnderConstructionComponent } from './atoms/under-construction/under-construction.component';

import { NavigationBarComponent } from './organisms/navigation-bar/navigation-bar.component';
import { SocialLinkTreeComponent } from './molecules/social-link-tree/social-link-tree.component';
import { ToastComponent } from './molecules/toast/toast.component';

import { ButtonGroupComponent } from './molecules/button-group/button-group.component';
import { EmailFormComponent } from './organisms/email-form/email-form.component';

@NgModule({
  declarations: [
    WebComponentsComponent,

    AccordionComponent,
    AlertComponent,
    AvatarComponent,
    BadgeComponent,
    BreadcrumbComponent,
    ButtonComponent,
    CardComponent,
    CarouselComponent,
    DropdownComponent,
    ExternalLinkAnchorComponent,
    IconComponent,
    InputComponent,
    ListGroupComponent,
    LogoComponent,
    PageTitleComponent,
    ProgressBarComponent,
    SliderComponent,
    SpinnerComponent,
    SwitchComponent,
    TypewriterComponent,
    UnderConstructionComponent,

    ButtonGroupComponent,
    SocialLinkTreeComponent,
    ToastComponent,

    EmailFormComponent,
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    WebComponentsComponent,

    AccordionComponent,
    AlertComponent,
    AvatarComponent,
    BadgeComponent,
    BreadcrumbComponent,
    ButtonComponent,
    CardComponent,
    CarouselComponent,
    DropdownComponent,
    ExternalLinkAnchorComponent,
    IconComponent,
    InputComponent,
    ListGroupComponent,
    LogoComponent,
    PageTitleComponent,
    ProgressBarComponent,
    SliderComponent,
    SpinnerComponent,
    SwitchComponent,
    TypewriterComponent,
    UnderConstructionComponent,
    
    ButtonGroupComponent,
    SocialLinkTreeComponent,
    ToastComponent,

    EmailFormComponent,
    NavigationBarComponent
  ]
})
export class WebComponentsModule { }
