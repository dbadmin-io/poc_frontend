import { Component } from '@angular/core';
import { DbLeftNavigationBarComponent } from '../component/db-left-navigation-bar/db-left-navigation-bar.component';
import { DbTopNavigationBarComponent } from '../component/db-top-navigation-bar/db-top-navigation-bar.component';
import { DbExplorerComponent } from '../component/db-explorer/db-explorer.component';
import { DbEditorComponent } from '../component/db-editor/db-editor.component';
import { DbInformationComponent } from '../component/db-information/db-information.component';
import { DbStatusBarComponent } from '../component/db-status-bar/db-status-bar.component';

@Component({
  selector: 'db-layout',
  standalone: true,
  imports: [DbLeftNavigationBarComponent, 
            DbTopNavigationBarComponent, 
            DbExplorerComponent, 
            DbEditorComponent, 
            DbInformationComponent,
            DbStatusBarComponent
          ],
  templateUrl: './db-layout.component.html',
  styleUrl: './db-layout.component.scss'
})
export class DbLayoutComponent {

}
