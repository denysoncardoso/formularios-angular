import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterModule, RouterOutlet, Routes} from '@angular/router';

interface Menuitem {
   title: string;
   submenu: {
      title: string;
      url: string;
   }[]
}


function createMenuTitle(route: string) {
   return route.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1))
       .join(' ');

}

function createMenuItems(routes: Routes): Menuitem[] {
   return routes.map((route) => {
      const title = createMenuTitle(route.path!);

      const submenus = route.children!.map(child => {
         const childTitle = createMenuTitle(child.path!);
         const childUrl = `${route.path}/${child.path!}`;

         return {
            title: childTitle,
            url: childUrl
         };
      });

      return {
         title,
         submenus,
      };
   });

}

@Component({
   selector: 'app-root',
   imports: [RouterModule],
   templateUrl: './app.component.html',
   styleUrl: './app.component.css',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {

}
