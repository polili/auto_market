import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { VehicleStatistics } from '../../domain';

@Component({
  selector: 'app-vehicle-statistics',
  templateUrl: './vehicle-statistics.component.html',
  styleUrls: ['./vehicle-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleStatisticsComponent {

  @Input() statistics: VehicleStatistics | null = null;

}
