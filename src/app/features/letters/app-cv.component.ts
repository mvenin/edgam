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
  boxToggle: boolean = false;

  isLetterA(ch: string): boolean {
    let m = ch.toUpperCase().match(/^A|Â|À$/g);
    return !!m;
  }

  isLetterE(ch: string): boolean {
    let m = ch.toUpperCase().match(/^E|Ë|É|È|Ê$/g);
    return !!m;
  }

  isLetterI(ch: string): boolean {
    let m = ch.toUpperCase().match(/^I|Î|Ï$/g);
    return !!m;
  }

  isLetterO(ch: string): boolean {
    let m = ch.toUpperCase().match(/^O|Ô$/g);
    return !!m;
  }

  isLetterU(ch: string): boolean {
    let m = ch.toUpperCase().match(/^Û|U|Ù|Ü$/g);
    return !!m;
  }

  matchLetterA(val: string, char: string): boolean {
    return this.isLetterA(char) && this.isLetterA(val);
  }

  matchLetterE(val: string, char: string): boolean {
    return this.isLetterE(char) && this.isLetterE(val);
  }

  matchLetterI(val: string, char: string): boolean {
    return this.isLetterI(char) && this.isLetterI(val);
  }

  matchLetterO(val: string, char: string): boolean {
    return this.isLetterO(char) && this.isLetterO(val);
  }

  matchLetterU(val: string, char: string): boolean {
    return this.isLetterU(char) && this.isLetterU(val);
  }

  isVowel(ch: string): boolean {
    let found = ['A', 'Â', 'À', 'Ë', 'E', 'É', 'È', 'Ê', 'I', 'Î', 'Ï', 'Ô', 'O', 'Û', 'U', 'Ù', 'Ü', 'Y'].find(t => t.toUpperCase() === ch.toUpperCase());
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
    return m;
  }

  onToggleLetters($event: MouseEvent) {
    this.sentenceLetters = [...this.txtDS?.nativeElement.value].map(t => t.toUpperCase());

    let btn: any = $event.target;
    this.boxToggle = !this.boxToggle;
    btn['innerText'] = this.boxToggle ? 'Txt' : 'Go';
  }

  onTypeLetter($event: KeyboardEvent, textBox: HTMLInputElement, char: string) {
    let val = textBox.value;
    if (this.isVowel(char) && (val.toLowerCase() === char.toLowerCase()
      || this.matchLetterA(val, char)
      || this.matchLetterE(val, char)
      || this.matchLetterI(val, char)
      || this.matchLetterO(val, char)
      || this.matchLetterU(val, char)
    )
    ) {
      textBox.value = char.toUpperCase();
    } else {
      textBox.value = '';
    }
  }

}
