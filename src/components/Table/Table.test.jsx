import { render, screen } from '@testing-library/react';

import { Table } from './Table';

const columns = [
  {
    id: 1,
    name: 'booking_id',
    label: 'BOOKING_ID',
  },
  {
    id: 2,
    name: 'firstName',
    label: 'FIRSTNAME',
  },
  {
    id: 3,
    name: 'lastName',
    label: 'LASTNAME',
  },
  {
    id: 4,
    name: 'bookingDate',
    label: 'BOOKINGDATE',
  },
  {
    id: 5,
    name: 'bookingTime',
    label: 'BOOKINGTIME',
  },
  {
    id: 6,
    name: 'guests',
    label: 'GUESTS',
  },
  {
    id: 7,
    name: 'occasion',
    label: 'OCCASION',
  },
];

const rows = [
  {
    booking_id: '846571a5sa01',
    firstName: 'Aleem',
    lastName: 'Akhtar',
    bookingDate: '2024-09-05',
    bookingTime: '17:00',
    guests: 1,
    occasion: 'birthday',
  },
];

describe('components/Table', () => {
  window.scrollTo = jest.fn();
  describe('<Table />', () => {
    it('Renders Table to the DOM', () => {
      render(<Table rows={rows} columns={columns} />);
      const tableEl = screen.getByRole('table');
      expect(tableEl).toBeInTheDocument();
    });
  });
});

