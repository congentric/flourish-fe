import OpHome from '../pages/OpportunityHome';
import OpDetails from '../components/OpportunityDetails';
import OpEdit from '../components/OpportunityEdit';
import OpCreate from '../components/OpportunityCreate';

const routes = [
  {
    path: '/opportunity',
    name: 'opHome',
    component: OpHome,
    children: [
      {
        path: ':opportunityId',
        name: 'OpDetails',
        component: OpDetails,
      },
      {
        path: ':opportunityId/edit',
        name: 'OpEdit',
        component: OpEdit,
      },
      {
        path: ':opportunityId/create',
        name: 'OpCreate',
        component: OpCreate,
      },
    ],
  },
];

export default routes;
