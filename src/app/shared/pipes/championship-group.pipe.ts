import { Pipe, PipeTransform } from '@angular/core';
import { MatchBetModel } from '@app/models';
import { StandingGroup } from '@app/shared';

@Pipe({
  name: 'championshipGroup'
})
export class ChampionshipGroupPipe implements PipeTransform {
  transform(value: Array<MatchBetModel>): Array<StandingGroup> {
    const response = new Array<StandingGroup>();
    value.forEach((match: MatchBetModel, index: number) => {
      const group = response.filter(x => x.groupName === match.championshipName);
      if (group.length !== 0) {
        group[0].group.push(match);
      } else {
        response.push({
          groupName: match.championshipName,
          group: [match]
        } as StandingGroup);
      }
    });
    return response;
  }
}
