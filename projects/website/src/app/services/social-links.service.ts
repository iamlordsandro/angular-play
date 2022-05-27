import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

import { SocialLink } from './../models/social-link';
import { SocialLinks } from './../configs/social-links';

@Injectable({
  providedIn: 'root'
})
export class SocialLinksService {
  
  private socialLinks: SocialLink[] = [];

  constructor() { }

  getSocialLinks():SocialLink[] {
    this.socialLinks = SocialLinks;
    return this.socialLinks;
  }
}
