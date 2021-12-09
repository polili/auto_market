import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { VehicleProgress } from '../../domain';

@Component({
  selector: 'app-vehicle-progress',
  templateUrl: './vehicle-progress.component.html',
  styleUrls: ['./vehicle-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleProgressComponent  {

  @Input() vehicleProgress: VehicleProgress | null = null;

}
