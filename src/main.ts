import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HabitTrackerMainModule } from './app/habit-tracker/habit-tracker-main.module';

platformBrowserDynamic()
  .bootstrapModule(HabitTrackerMainModule)
  .catch(err => console.error(err));
