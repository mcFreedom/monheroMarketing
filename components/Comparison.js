import React from "react";
import PropTypes from "prop-types";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

export const Comparison = (props) => {
  return (
    <div className=" text-justify md:p-10">
      <Table className="w-full border border-white">
        <Thead>
          <Tr className=" text-2xl p-2 text-white">
            <Th></Th>
            <Th>Kubera</Th>
            <Th>Finary</Th>
            <Th>CoinMarketCap</Th>
            <Th>Coin Gecko</Th>
            <Th>Spreadsheet</Th>
            <Th>MonHero</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>End to end encrypted</Td>
            <Td className="">⛔</Td>
            <Td className="">⛔</Td>
            <Td className="">⛔</Td>
            <Td className="">⛔</Td>
            <Td className="">⛔</Td>
            <Td className="">✅</Td>
          </Tr>
          <Tr>
            <Td className="">Open source frontend</Td>
            <Td className="">⛔</Td>
            <Td className="">⛔</Td>
            <Td className="">⛔</Td>
            <Td className="">⛔</Td>
            <Td className="">⛔</Td>
            <Td className="">✅</Td>
          </Tr>
          <Tr>
            <Td className="">Government / company can spy on your assets</Td>
            <Td className="">✅</Td>
            <Td className="">✅</Td>
            <Td className="">✅</Td>
            <Td className="">✅</Td>
            <Td className="">✅</Td>
            <Td className="">⛔</Td>
          </Tr>
          <Tr>
            <Td className="">Advanced crypto rate tracking</Td>
            <Td className="">⛔</Td>
            <Td className="">⛔</Td>
            <Td className="">✅</Td>
            <Td className="">✅</Td>
            <Td className="">⛔</Td>
            <Td className="">✅</Td>
          </Tr>
          <Tr>
            <Td className="">Monthly Cost</Td>
            <Td className="">USD10</Td>
            <Td className="">USD12</Td>
            <Td className="">Free 🤔</Td>
            <Td className="">Free 🤔</Td>
            <Td className="">Free</Td>
            <Td className="">USD5</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
};
