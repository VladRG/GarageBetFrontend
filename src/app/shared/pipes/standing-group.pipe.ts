import { Pipe, PipeTransform } from '@angular/core';
import { MatchBetModel } from '@app/models';

@Pipe({
  name: 'standingGroup'
})
export class StandingGroupPipe implements PipeTransform {
  transform(value: Array<MatchBetModel>): Array<StandingGroup> {
    const response = new Array<StandingGroup>();
    value.forEach((match: MatchBetModel, index: number) => {
      const group = response.filter(x => x.groupName === match.standing);
      if (group.length !== 0) {
        group[0].group.push(match);
      } else {
        response.push({
          groupName: match.standing,
          group: [match]
        } as StandingGroup);
      }
    });
    return response;
  }
}

export class StandingGroup {
  groupName: string;
  group: Array<MatchBetModel>;
}
