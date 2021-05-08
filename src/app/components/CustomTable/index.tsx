/**
 *
 * CustomTable
 *
 */
import React from 'react';

interface Props {
  data: Array<{ [key: string]: any }>;
  handleRowClick: Function;
}

export const CustomTable = (props: Props) => {
  const { data } = props;

  return (
    <div style={{ overflow: 'auto', display: 'flex', textAlign: 'center' }}>
      <table>
        <thead>
          <tr>
            <th style={{ width: window.screen.availWidth / 3 }}>Author</th>
            <th style={{ width: window.screen.availWidth / 3 }}>Title</th>
            <th style={{ width: window.screen.availWidth / 3 }}>
              Creation Date
            </th>
          </tr>
        </thead>
        <tbody>
          {data!.map((item, index) => {
            return (
              <tr
                key={index}
                onClick={event => {
                  props.handleRowClick(item);
                }}
              >
                <td>{item.ownerName}</td>
                <td style={{ textAlign: 'left', height: 100 }}>{item.title}</td>
                <td>{item.creation_date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
