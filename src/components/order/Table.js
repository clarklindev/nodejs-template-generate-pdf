import React from "react";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  DataTableCell,
} from "@david.kucsai/react-pdf-table";

import { receiverDetails, transactionDetails, data, totalAmount } from "./data";

// Create styles
const styles = StyleSheet.create({
  document: {},
  page: {
    padding: "50pt",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
  },
  headerText: {
    fontSize: "40px",
  },

  receiverTransactionCombo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  receiverText: {
    display: "flex",
    flexDirection: "column",
    fontSize: "12pt",
    lineHeight: "2pt",
  },

  transactionText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end", // aligns children inside View
    fontSize: "12pt",
    lineHeight: "2pt",
  },

  view: {
    marginTop: "40px",
    marginBottom: "40px",
    borderBottomWidth: "1.2",
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
  },

  datatablecellstart: {
    textAlign: "left",
    border: 0,
    paddingVertical: "10pt",
  },

  datatablecell: {
    border: 0,
    paddingVertical: "10pt",
    textAlign: "center",
  },

  tablebody: {},

  tablecellStart: {
    border: 0,
    paddingVertical: "10px",
    textAlign: "start",
  },
  tablecell: {
    border: 0,
    paddingVertical: "10px",
    textAlign: "center",
  },

  alignCenter: {
    textAlign: "center",
  },

  totalRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  total: {
    marginRight: "25px",
    width: "120px",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },

  thankyou: {
    marginTop: "60px",
    marginBottom: "40px",
    fontSize: "14pt",
  },

  fontSmall: {
    fontSize: "12pt",
    lineHeight: "2pt",
  },
});

const MyTable = ({ invoiceId }) => {
  return (
    <Document style={styles.document}>
      <Page style={styles.page}>
        <View style={styles.header}>
          <Image src="/logo192.png" style={{ width: 100, height: 100 }} />
          <Text style={styles.headerText}>INVOICE</Text>
        </View>

        <View style={styles.receiverTransactionCombo}>
          <View style={styles.receiverText}>
            <Text>{receiverDetails.name}</Text>
            <Text>{receiverDetails.number}</Text>
            <Text>{receiverDetails.email}</Text>
            <Text>{receiverDetails.address}</Text>
          </View>
          <View style={styles.transactionText}>
            <Text>
              {transactionDetails.invoiceNumberHeader}
              {transactionDetails.invoiceNumber}
            </Text>
            <Text>
              {transactionDetails.dateOfIssueHeader}
              {transactionDetails.dateOfIssue}
            </Text>
            <Text>
              {transactionDetails.dueDateHeader}
              {transactionDetails.dueDate}
            </Text>
          </View>
        </View>

        <View style={styles.view}>
          <Table data={data} style={styles.table} isNested={false}>
            <TableHeader
              includeBottomBorder={true}
              includeLeftBorder={false}
              includeRightBorder={false}
              includeTopBorder={true}
            >
              <TableCell style={styles.tablecellStart}>Item</TableCell>
              <TableCell style={styles.tablecell} weighting={0.3}>
                Quantity
              </TableCell>
              <TableCell style={styles.tablecell} weighting={0.3}>
                Unit Price
              </TableCell>
              <TableCell style={styles.tablecell} weighting={0.3}>
                Total
              </TableCell>
            </TableHeader>

            <TableBody
              style={styles.tablebody}
              includeBottomBorder={false}
              includeLeftBorder={false}
              includeRightBorder={false}
              includeTopBorder={false}
            >
              <DataTableCell
                style={styles.datatablecellstart}
                getContent={(r) => r.item}
              />
              <DataTableCell
                weighting={0.3}
                style={styles.datatablecell}
                getContent={(r) => r.quantity}
              />
              <DataTableCell
                weighting={0.3}
                style={styles.datatablecell}
                getContent={(r) => {
                  return r.currency + r.unitprice;
                }}
              />
              <DataTableCell
                weighting={0.3}
                style={styles.datatablecell}
                getContent={(r) => {
                  return r.currency + r.total;
                }}
              />
            </TableBody>
          </Table>
        </View>
        <View style={styles.totalRow}>
          <View></View>
          <View style={styles.total}>
            <Text>Total</Text>
            <Text>
              {totalAmount.currency}
              {totalAmount.total}
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.thankyou}>Thank you for your business</Text>
          <Text style={styles.fontSmall}>Han-Nung Lin</Text>
          <Text style={styles.fontSmall}>clarklindev@gmail.com</Text>
          <Text style={styles.fontSmall}>
            1234 Maplewood Drive, Apt. 5B, Cape Town, South Africa
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyTable;
