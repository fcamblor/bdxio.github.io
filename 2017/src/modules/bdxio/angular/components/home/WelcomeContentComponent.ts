export class WelcomeContentComponent implements ng.IDirective {
    public controller: Function = WelcomeContentController;
    public template: string = `
        <section class="welcome-home wrapper">
            <div class="row">
                <div class="col-sm-12 col-md-7" data-sr="opacity 0.5 1s, reset">
                     <h1 class="text-white title-home">
                         Eyh ! On vous prépare l'édition 2017 de BDX I/O !
                     </h1>
                     <h3 class="text-white">
                        <b>Merci !</b>
                         Un grand merci à tous de votre participation à l'édition 2016 de bdx.io !
                        <br/>
                        <br/>
                        C'est décidé, la prochaine édition se déroulera le <strong>10 Novembre 2017 à l'ENSEIRB-MATMECA</strong> : save the date !
                        <br/>
                        <br/>
                        Nous n'avons pas encore statué sur les dates d'ouverture de la billeterie et du CFP, on ne manquera pas de vous prévenir sur ces sujets. 
                        <!--Le programme de l'évènement est disponible sur l'application<br/>-->
                        <!--<a class="link link-white" href="http://www.voxxr.in/" target="_blank">Voxxrin</a> (en web, sur android, et sur iPhone).-->
                        <!--<br/>-->
                        <!--<br/>-->
                        <!--Vous pouvez également visiter la page <a class="link link-white" href="http://lanyrd.com/2016/bdxio/" target="_blank">Lanyrd</a> de l'évènement.-->
                     </h3>
                </div>
                <a href="https://www.youtube.com/playlist?list=PLUJzERpatfsXGv1q1kolSgriwVZXRqKVw"
                class="btn-view-talks btn btn-primary btn-xlg has-icon-left" target="_blank">
                     <i class="fa fa-play"></i>Vidéos des talks 2016
                </a>
            </div>
        </section>
    `
}
export class WelcomeContentController {
    public static $inject: Array<string> = [];
    constructor() {
    }
}