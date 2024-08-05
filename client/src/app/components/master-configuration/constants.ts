import { Column, MatrixStatus } from "./interfaces";

export const  emissionsColumns: Column[] = [
    {
      id: 'alertName',
      displayName: 'Alert Name',
      type: 'string',
      controlType: 'string',
      order: 1,
      searchable: false,
      sortable: false,
      hideable: false,
      visible: true,
      movable: false,
      stickable: false,
      sticky: false,
      groupable: false,
      titleStyle: {
        'font-weight': '500',
        'font-size': '100%',
        color: '#000000',
        'overflow-wrap': 'anywhere'
      },
      hasSubtitle: true,
      showMenuOptions: false,
      subtitleColumn: 'alertSubId',
      subtitleStyle: {
        'font-size': '80%',
        color: 'darkgray',
        'overflow-wrap': 'anywhere'
      },
      hasPreTextImage: true,
      hasPostTextImage: false
    },
    {
      id: 'plant',
      displayName: 'Plant',
      type: 'string',
      controlType: 'string',
      order: 2,
      showMenuOptions: false,
      searchable: false,
      sortable: true,
      hideable: false,
      visible: true,
      movable: false,
      stickable: false,
      sticky: false,
      groupable: true,
      titleStyle: {
        'overflow-wrap': 'anywhere'
      },
      hasPreTextImage: false,
      hasPostTextImage: false,
      hasSubtitle: true,
      subtitleColumn: 'plantSubId',
      subtitleStyle: {
        'font-size': '80%',
        color: 'darkgray',
        'overflow-wrap': 'anywhere'
      }
    },
    {
      id: 'location',
      displayName: 'Location',
      type: 'string',
      controlType: 'string',
      order: 3,
      hasSubtitle: true,
      showMenuOptions: false,
      subtitleColumn: 'locationSubId',
      searchable: false,
      sortable: true,
      hideable: false,
      visible: true,
      movable: false,
      stickable: false,
      sticky: false,
      groupable: true,
      titleStyle: {
        'overflow-wrap': 'anywhere'
      },
      subtitleStyle: {
        'font-size': '80%',
        color: 'darkgray',
        'overflow-wrap': 'anywhere'
      },
      hasPreTextImage: false,
      hasPostTextImage: false,
      hasConditionalStyles: true
    },
    {
      id: 'asset',
      displayName: 'Asset',
      type: 'number',
      controlType: 'string',
      order: 4,
      hasSubtitle: true,
      showMenuOptions: false,
      subtitleColumn: 'assetSubId',
      searchable: false,
      sortable: true,
      hideable: false,
      visible: true,
      movable: false,
      stickable: false,
      sticky: false,
      groupable: true,
      titleStyle: {},
      subtitleStyle: {
        'font-size': '80%',
        color: 'darkgray',
        'overflow-wrap': 'anywhere'
      },
      hasPreTextImage: false,
      hasPostTextImage: false
    },
    // {
    //   id: 'status',
    //   displayName: 'Status',
    //   type: 'string',
    //   controlType: 'string',
    //   order: 5,
    //   hasSubtitle: true,
    //   showMenuOptions: false,
    //   subtitleColumn: 'parentSubId',
    //   searchable: false,
    //   sortable: true,
    //   hideable: false,
    //   visible: true,
    //   movable: false,
    //   stickable: false,
    //   sticky: false,
    //   groupable: true,
    //   titleStyle: {
    //     'overflow-wrap': 'anywhere'
    //   },
    //   subtitleStyle: {
    //     'font-size': '80%',
    //     color: 'darkgray',
    //     'overflow-wrap': 'anywhere'
    //   },
    //   hasPreTextImage: false,
    //   hasPostTextImage: false,
    //   hasConditionalStyles: true,
    //       // titleStyle: {
    //       //   textTransform: 'capitalize',
    //       //   fontWeight: 500,
    //       //   display: 'flex',
    //       //   flexDirection: 'row',
    //       //   justifyContent: 'center',
    //       //   alignItems: 'center',
    //       //   position: 'relative',
    //       //   top: '10px',
    //       //   width: '90px',
    //       //   right: '15px',
    //       //   height: '24px',
    //       //   background: '#FEF3C7',
    //       //   color: '#92400E',
    //       //   borderRadius: '12px'
    //       // }
    // },
    // {
    //   id: 'usergroups',
    //   displayName: 'User Groups',
    //   type: 'string',
    //   controlType: 'string',
    //   order: 5,
    //   hasSubtitle: true,
    //   showMenuOptions: false,
    //   subtitleColumn: 'parentSubId',
    //   searchable: false,
    //   sortable: true,
    //   hideable: false,
    //   visible: true,
    //   movable: false,
    //   stickable: false,
    //   sticky: false,
    //   groupable: true,
    //   titleStyle: {
    //     'overflow-wrap': 'anywhere'
    //   },
    //   subtitleStyle: {
    //     'font-size': '80%',
    //     color: 'darkgray',
    //     'overflow-wrap': 'anywhere'
    //   },
    //   hasPreTextImage: false,
    //   hasPostTextImage: false
    // }
  ];


export const timeFilter: MatrixStatus[] = [
  { label: 'Today', value: 'today' },
  { label: 'Yesterday', value: 'yesterday' },
  { label: 'Last 7 Days', value: 'lastSevenDays' },
  {
    label: 'Last 30 Days',
    value: 'lastThirtyDays'
  },
  {
    label: 'This Month',
    value: 'month'
  },
  {
    label: 'This Year',
    value: 'year'
  },
  { label: 'Last 3 Years', value: 'lastThreeYears' }
];





export const forLongerThan =[
  '5 Seconds',
  '10 Seconds', 
  '20 Seconds',
  '1 Minute',
  '2 Minutes',
  '5 Minutes',
  '10 Minutes',
  '30 Minutes',
  '60 Minutes',
  '2 Hours',
  '6 Hours',
  '12 Hours',
  '24 Hours'
]

export const units = [
  'Parts per Million (ppm)',
  'Parts per Billion (ppb)',
  'Milligrams per Cubic Meter (mg/m³)',
  'Micrograms per Cubic Meter (µg/m³)']


export const users = ['Prashanth','Geetha','Narendra']

export const userGroups=['Maintainance Engineer','Asset Manager','Compliance Officer','EHS Manager','Operations Manager','Safety Officer','Sustainability Officer']
