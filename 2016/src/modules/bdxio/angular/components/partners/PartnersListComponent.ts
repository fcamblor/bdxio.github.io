import {ICompany} from "../../../models/int/ICompany";
export class PartnersListComponent implements ng.IDirective {

    public controller:Function = PartnersListController;

    public scope = {
        partnersByType: '='
    };

    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;

    // Pour une liste complète des attributs possibles sur un attendee, cf SharedModel dans les
    // columnFields de partners
    public template:string = `
        <div class="wrapper">
            <div class="row" id="{{$ctrl.partnersByType.type}}">
              <div class="col-sm-12">
                    <h1 class="section-title text-primary space-top-40 inner-space-left-20 space-bottom-40 {{$ctrl.partnersByType.type}}">
                        {{$ctrl.partnersByType.type}}
                    </h1>
                </div>
                <ul class="row">
                    <li class="item-partner col-xs-12 col-sm-6 col-md-4 col-lg-3" ng-repeat="partner in $ctrl.partnersByType.companies">
                        <div class="content-partner {{partner.type}}" ng-morph-modal="$ctrl.createPartnerDetailsSettings(partner)">
                            <img ng-src="{{partner.imgSrc}}">
                            <div class="content-infos-partner">
                                <span class="name-partner">{{partner.name}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="inner-space-left-40" ng-if="!$ctrl.partnersByType.companies.length">
                    <em>Pas encore d'annonce officielle...</em>
                </div>
              </div>
            </div>
        </div>
    `;
}

export class PartnersListController {

    public createPartnerDetailsSettings(partner:ICompany) {
        return {
            closeEl: '.close',
            target: 'body',
            modal: {
                template: `
            <div class="modal-morph">
              <span class="glyphicon glyphicon-remove close"></span>
              <div class="row">
                <div class="col-md-12 header-modal">
                    <div class="row">
                        <div class="col-sm-3">
                            <span class="avatar-entity">
                                <img ng-src="${partner.imgSrc}" width="150px" style="background-color: white"
                                         err-src="https://cdn.rawgit.com/bdxio/static/master/default-company-logo.png">
                            </span>
                        </div>
                        <h3 class="col-sm-9 text-white highlight-text-bold force-inner-space-left-30 title">
                        ${partner.name}<br>
                        <i class="fa fa-link space-right-5" aria-hidden="true"></i><a href="${partner.website}" target="_blank">Site</a>
                        </h3>

                    </div>
                </div>
                <div class="col-md-12 content-modal">
                    <p class="desc-attendees">${partner.description}</p>
                </div>
              </div>
            </div>`,
                fade: true
            }
        };

    }
}
