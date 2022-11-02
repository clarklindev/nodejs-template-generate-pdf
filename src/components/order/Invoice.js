import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  DataTableCell
} from '@david.kucsai/react-pdf-table';

const data = [
  {
    firstName: 'John',
    lastName: 'Smith',
    dob: new Date(2000, 1, 1),
    country: 'Australia',
    phoneNumber: 'xxx-0000-0000'
  },
  {
    firstName: 'Apple',
    lastName: 'Smith',
    dob: new Date(2000, 1, 1),
    country: 'Australia',
    phoneNumber: 'xxx-0000-0000'
  },
  {
    firstName: 'Pink',
    lastName: 'Smith',
    dob: new Date(2000, 1, 1),
    country: 'Australia',
    phoneNumber: 'xxx-0000-0000'
  }
];
// Create styles
const styles = StyleSheet.create({
  view: {
    marginBottom: '20pt',
    padding: '10pt',
    backgroundColor: 'pink'
  },

  datatablecell: {
    border: 0
  },
  tablecell: {
    border: 0
  }
});

const Invoice = ({ order }) => {
  return (
    <Document style={styles.document}>
      <Page style={styles.page}>
        <View style={styles.view}>
          <Table data={data} style={styles.table} isNested={false}>
            <TableHeader
              style={styles.tableheader}
              includeBottomBorder={false}
              includeLeftBorder={false}
              includeRightBorder={false}
              includeTopBorder={false}
            >
              <TableCell style={styles.tablecell} weighting={0.3}>
                First Name
              </TableCell>
              <TableCell style={styles.tablecell} weighting={0.3}>
                Last Name
              </TableCell>
              <TableCell style={styles.tablecell}>DOB</TableCell>
              <TableCell style={styles.tablecell}>Country</TableCell>
              <TableCell style={styles.tablecell}>Phone Number</TableCell>
            </TableHeader>
            <TableBody
              style={styles.tablebody}
              includeBottomBorder={false}
              includeLeftBorder={false}
              includeRightBorder={false}
              includeTopBorder={false}
            >
              <DataTableCell
                style={styles.datatablecell}
                weighting={0.3}
                getContent={(r) => r.firstName}
              />
              <DataTableCell
                style={styles.datatablecell}
                weighting={0.3}
                getContent={(r) => r.lastName}
              />
              <DataTableCell
                style={styles.datatablecell}
                getContent={(r) => r.dob.toLocaleString()}
              />
              <DataTableCell
                style={styles.datatablecell}
                getContent={(r) => r.country}
              />
              <DataTableCell
                style={styles.datatablecell}
                getContent={(r) => r.phoneNumber}
              />
            </TableBody>
          </Table>
        </View>
        <View>
          <Text>Hello</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Invoice;
