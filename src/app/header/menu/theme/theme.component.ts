import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent implements OnInit {
  @Output() themeChanged = new EventEmitter<void>();
  @Input() darkTheme: boolean;
  constructor() {}

  ngOnInit(): void {}
  themeClicked() {
    this.themeChanged.emit();
  }
}
