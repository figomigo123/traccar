export let listHTML1 = 
`<div>
    <ul class="list-group">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
    </ul>
</div>`
export let listTS1 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-listgroup',
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.scss']
})
export class ListgroupComponent  { }
`

export let listHTML2 = 
`<div>
    <ul class="list-group">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item active">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
    </ul>
</div>`
export let listTS2 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-listgroup',
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.scss']
})
export class ListgroupComponent  { }
`

export let listHTML3 = 
`<div>
    <ul class="list-group">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item disabled">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
    </ul>
</div>`
export let listTS3 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-listgroup',
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.scss']
})
export class ListgroupComponent  { }
`

export let listHTML4 = 
`<div>
    <div class="list-group">
        <a class="list-group-item list-group-item-action active"
            href="javascript:;">Cras justo odio</a>
        <a class="list-group-item list-group-item-action" href="javascript:;">Dapibus
            ac facilisis in</a>
        <a class="list-group-item list-group-item-action" href="javascript:;">Morbi leo
            risus</a>
        <a class="list-group-item list-group-item-action" href="javascript:;">Porta ac
            consectetur ac</a>
        <a class="list-group-item list-group-item-action"
            href="javascript:;">Vestibulum at eros</a>
    </div>
</div>`
export let listTS4 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-listgroup',
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.scss']
})
export class ListgroupComponent  { }
`

export let listHTML5 = 
`<div>
    <ul class="list-group">
        <li class="list-group-item">Et harum quidem rerum facilis est et</li>
        <li class="list-group-item list-group-item-success">Et harum quidem rerum facilis est et</li>
        <li class="list-group-item list-group-item-info">Cras sit amet nibh libero</li>
        <li class="list-group-item list-group-item-warning">voluptatibus maiores alias consequatur aut </li>
        <li class="list-group-item list-group-item-danger">The wise man therefore always holds in these </li>
    </ul>
</div>`
export let listTS5 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-listgroup',
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.scss']
})
export class ListgroupComponent  { }
`

export let listHTML6 = 
`<div>
    <ul class="list-group">
        <li class="list-group-item"><i class="fas fa-cog text-primary" aria-hidden="true"></i> Et harum quidem rerum facilis est et</li>
        <li class="list-group-item"><i class="fas fa-cog text-danger" aria-hidden="true"></i> Et harum quidem rerum facilis est et</li>
        <li class="list-group-item"><i class="fas fa-cog text-success" aria-hidden="true"></i> Cras sit amet nibh libero</li>
        <li class="list-group-item"><i class="fas fa-cog text-warning" aria-hidden="true"></i> voluptatibus maiores alias consequatur aut </li>
        <li class="list-group-item"><i class="fas fa-cog text-info" aria-hidden="true"></i> The wise man therefore always holds in these </li>
    </ul>
</div>`
export let listTS6 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-listgroup',
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.scss']
})
export class ListgroupComponent  { }
`

export let listHTML7 = 
`<div>
    <ul class="list-group">
        <li class="list-group-item justify-content-between">
            Nam libero tempore, cum soluta
            <span class="badgetext badge badge-primary badge-pill">14</span>
        </li>
        <li class="list-group-item justify-content-between">
            Et harum quidem rerum facilis est et
            <span class="badgetext badge badge-danger badge-pill">2</span>
        </li>
        <li class="list-group-item justify-content-between">
            Itaque earum rerum hic tenetur a sapiente
            <span class="badgetext badge badge-success badge-pill">1</span>
        </li>
        <li class="list-group-item justify-content-between">
            Itaque earum rerum hic tenetur a sapiente
            <span class="badgetext badge badge-warning badge-pill">3</span>
        </li>
    </ul>
</div>`
export let listTS7 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-listgroup',
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.scss']
})
export class ListgroupComponent  { }
`

export let listHTML8 = 
`<div >
    <ul class="list-group wd-md-100p">
        <li class="list-group-item d-flex align-items-center">
            <img alt="" class="wd-30 rounded-circle mg-r-15" src="../../assets/img/faces/5.jpg">
            <div>
                <h6 class="tx-13 tx-inverse tx-semibold mg-b-0">Adrian Monino</h6><span class="d-block tx-11 text-muted">Premium Member</span>
            </div>
        </li>
        <li class="list-group-item d-flex align-items-center">
            <img alt="" class="wd-30 rounded-circle mg-r-15" src="../../assets/img/faces/6.jpg">
            <div>
                <h6 class="tx-13 tx-inverse tx-semibold mg-b-0">Joel Mendez</h6><span class="d-block tx-11 text-muted">Premium Member</span>
            </div>
        </li>
        <li class="list-group-item d-flex align-items-center">
            <img alt="" class="wd-30 rounded-circle mg-r-15" src="../../assets/img/faces/9.jpg">
            <div>
                <h6 class="tx-13 tx-inverse tx-semibold mg-b-0">Marianne Audrey</h6><span class="d-block tx-11 text-muted">Premium Member</span>
            </div>
        </li>
    </ul>
</div>`
export let listTS8 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-listgroup',
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.scss']
})
export class ListgroupComponent  { }
`