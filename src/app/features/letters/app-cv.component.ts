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

  onToggleLetters($event: MouseEvent) {
    this.sentenceLetters = [...this.txtDS?.nativeElement.value].map(t => t.toUpperCase());
    let btn: any = $event.target;
    this.boxToggle = !this.boxToggle;
    btn['innerText'] = this.boxToggle ? 'Text' : 'Go';
  }

  isVoyelle(ch: string): boolean {
    let found = ['A', 'E', 'I', 'O', 'U', 'Y'].find(t => t.toUpperCase() === ch.toUpperCase());
    return !!found;
  }

  isSpace(ch: string) {
    return ch.match(/^\s*$/g);
  }

  onTypeLetter($event: KeyboardEvent, textBox: HTMLInputElement, char: string) {
    let key: any = $event['key'];
    if (key === 'Shift') {
      return;
    }
    if (key.toLowerCase() !== char.toLowerCase()) {
      textBox.value = '';
    } else {
      textBox.value = char.toUpperCase();
    }
  }

}
