import SettingsIcon from '@assets/icons/settings.svg';
import ReportingIcon from '@assets/icons/reporting.svg';
import CompanyIcon from '@assets/icons/company.svg';
import MachinesIcon from '@assets/icons/machines.svg';
import DashboardIcon from '@assets/icons/dashboard.svg';
import ProductionIcon from '@assets/icons/production.svg';
import WorkflowsIcon from '@assets/icons/workflows.svg';
import LogoutIcon from '@assets/icons/logout.svg';
import HelpIcon from '@assets/icons/help.svg';
import JobsIcon from '@assets/icons/jobs.svg';
import * as React from 'react';

export interface IMenuItem {
  title: string;
  link: string;
  icon: React.ReactNode;
}

export const mainMenu: IMenuItem[] = [
  {
    title: 'Company',
    link: '/company',
    icon: <CompanyIcon />
  },
  {
    title: 'Machines',
    link: '/machines',
    icon: <MachinesIcon />
  },
  {
    title: 'Dashboards',
    link: '/dashboards',
    icon: <DashboardIcon />
  },
  {
    title: 'Reports',
    link: '/reports',
    icon: <ReportingIcon />
  },
  {
    title: 'Production',
    link: '/production',
    icon: <ProductionIcon />
  },
  {
    title: 'Inspection Jobs',
    link: '/jobs',
    icon: <JobsIcon />
  },
  {
    title: 'Workflows',
    link: '/workflows',
    icon: <WorkflowsIcon />
  }
];

export const systemMenu: IMenuItem[] = [
  {
    title: 'Help',
    link: '/help',
    icon: <HelpIcon />
  },
  {
    title: 'Settings',
    link: '/settings',
    icon: <SettingsIcon />
  },
  {
    title: 'Log out',
    link: '/log-out',
    icon: <LogoutIcon />
  }
];
