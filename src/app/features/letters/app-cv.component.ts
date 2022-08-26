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

  voyelles($event: MouseEvent, txtsrc: HTMLTextAreaElement) {
    this.sentenceLetters = [...this.txtDS?.nativeElement.value];
    let btn: any = $event.target;
    if (txtsrc.style.display === 'none') {
      txtsrc.style.display = '';
      btn['innerText'] = 'voyelles';
    } else {
      txtsrc.style.display = 'none';
      btn['innerText'] = 'text';
    }

  }

  isVoyelle(ch: string): boolean {
    let found = ['A', 'E', 'I', 'O', 'U', 'Y'].find(t => t === ch);
    return !!found;
  }

  isSpace(ch: string) {
    return ch.match(/^\s*$/g);
  }

  showTextBox(textBox: HTMLInputElement) {
    textBox.hidden = false;
    textBox.focus();
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
