import { Directive, ElementRef, Input, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { escapeHTML } from './value-utils';

@Directive({ selector: '[ngItemLabel]', standalone: true })
export class NgItemLabelDirective implements OnChanges {
    @Input() ngItemLabel: string;
    @Input() escape = true;

    constructor(private element: ElementRef<HTMLElement>) { }

    ngOnChanges(changes: SimpleChanges) {
        this.element.nativeElement.innerHTML = this.escape ?
            escapeHTML(this.ngItemLabel) :
            this.ngItemLabel;
    }
}

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[ng-option-tmp]', standalone: true })
export class NgOptionTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[ng-optgroup-tmp]', standalone: true })
export class NgOptgroupTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[ng-label-tmp]', standalone: true })
export class NgLabelTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[ng-multi-label-tmp]', standalone: true })
export class NgMultiLabelTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[ng-header-tmp]', standalone: true })
export class NgHeaderTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[ng-footer-tmp]', standalone: true })
export class NgFooterTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[ng-notfound-tmp]', standalone: true })
export class NgNotFoundTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[ng-typetosearch-tmp]', standalone: true })
export class NgTypeToSearchTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[ng-loadingtext-tmp]', standalone: true })
export class NgLoadingTextTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[ng-tag-tmp]', standalone: true })
export class NgTagTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[ng-loadingspinner-tmp]', standalone: true })
export class NgLoadingSpinnerTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}
