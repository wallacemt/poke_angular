import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonModule, NgIf } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { heartCircle } from 'ionicons/icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, NgIf, FormsModule, HeaderComponent],
})
export class HeaderComponent implements OnInit {
  searchTerm: string = '';

  @Input() showSearch: boolean = true;
  @Output() searchChanged = new EventEmitter<string>();

  constructor(private navCtrl: NavController) {}

  onSearchChange() {
    this.searchChanged.emit(this.searchTerm);
  }

  ngOnInit() {
    addIcons({ heartCircle });
  }

  toFavorites() {
    this.navCtrl.navigateForward('/pokemon/favorites');
  }

  goHome() {
    this.navCtrl.navigateForward('');
  }
}
