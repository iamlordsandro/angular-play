import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wc-lib-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  title: string = 'avatar-component';
  height: string = '50px';
  mood: string = 'happy';
  computedSrc: string = '';
  moods: string[] = [
    'angry',
    'awesome',
    'beep',
    'buddha',
    'call',
    'cloud',
    'crossed-finger',
    'cry',
    'doubt',
    'embarassed',
    'festive',
    'fight',
    'happy',
    'hi',
    'hug',
    'idea',
    'impressed',
    'in-love',
    'ko',
    'lol',
    'loud', 'love-kiss', 'love', 'lovely', 'malandrino', 'mind-blowing', 'ok', 'omg', 'preoccuped', 'shhh', 'sick', 'hi', 'stop', 'thanks', 'win', 'work', 'zzz'
  ];
  @Input() avatarSrc?: string;
  @Input() avatarHeight?: number;
  @Input() avatarMood?: string;
  @Output() readonly clickedAvatarEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.title = 'avatar-component';
    this.height = this.computeAvatarHeight(this.avatarHeight);
    this.mood = this.computeAvatarMood(this.avatarMood);
    this.computedSrc = this.computeAvatarSrc(this.avatarSrc, this.mood);
  }

  private computeAvatarHeight(height?: number): string {
    let computedImgHeight: string = '';
    if (height && height > 0) {
      return computedImgHeight = height.toString() + 'px';
    } else {
      computedImgHeight = '50 px';
      return computedImgHeight;
    }
  }

  private computeAvatarMood(mood?: string): string {
    let computedAvatarMood: string = '';
    if (mood && mood != '') {
      return computedAvatarMood = mood;
    } else {
      return computedAvatarMood = 'happy';
    }
  }

  private computeAvatarSrc(baseURL?: string, mood?: string): string {
    let computedAvatarSrc: string = '';
    if (baseURL && mood) {
      return computedAvatarSrc = baseURL + 'avatar-' + mood + '.png';
    } else {
      return 'avatar-happy.png'
    }
  }

  private randomizeAvatarMood(): string {
    return this.computedSrc = this.computeAvatarSrc(this.avatarSrc, this.pickRandomFromMoods());
  }

  pickRandomFromMoods(): string {
    let randomNumber: number;
    let moodsLenght: number = this.moods.length - 1;
    randomNumber = Math.floor((Math.random() * moodsLenght) + 1);
    return this.moods[randomNumber];
  }

  public onClickedAvatar($event: Event) {
    this.clickedAvatarEvent.emit($event);
    this.randomizeAvatarMood();
  }

}
