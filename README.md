# Elements Mapper using Angular

Connect the dots!
Connect/map array of elements with arrows.

## Demo

https://elements-mapping.web.app/

## Usage

`
<elements-mapping [lhs]="[ { id: 1, title: 'Object 1', mapTo: 1 } ]" [rhs]="[ { id: 1, title: 'Item 1' } ]" (output)="output = $event"></elements-mapping>
`

## Limitations

Currently it supports one-to-one and many-to-one mapping only