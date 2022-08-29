import {
  Component, ViewChild, ElementRef
} from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './app-cv.component.html',
  styleUrls: ['app-cv.component.scss']
})
export class AppCvComponent {

  @ViewChild('txtDS') txtDS: ElementRef | undefined;
  sentenceLetters: any[] = [];
  lettersMeta: any[] = [];

  boxToggle: boolean = false;

  onToggleLetters($event: MouseEvent) {
    this.sentenceLetters = [...this.txtDS?.nativeElement.value].map(t => t.toUpperCase());

    let btn: any = $event.target;
    this.boxToggle = !this.boxToggle;
    btn['innerText'] = this.boxToggle ? 'Txt' : 'Go';
  }

  isVowel(ch: string): boolean {
    let found = ['A', 'E', 'I', 'O', 'U', 'Y'].find(t => t.toUpperCase() === ch.toUpperCase());
    return !!found;
  }

  isSpace(ch: string) {
    return ch.match(/^\s*$/g);
  }

  isPunctuation(ch: string) {
    let m = ch.match(/^\.|\!|\?$/g);
    return m;
  }

  isBreakToNewLine(ch: string) {
    let m = ch.match(/^#$/g);
    console.debug(ch+' '+m);
    return m;
  }

  onTypeLetter($event: KeyboardEvent, textBox: HTMLInputElement, char: string) {
    let val = textBox.value;
    if (val.toLowerCase() === char.toLowerCase() && this.isVowel(char)) {
      textBox.value = char.toUpperCase();
    } else {
      textBox.value = '';
    }
  }

}
