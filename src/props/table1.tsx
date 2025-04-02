import { ReactElement } from "react";

const Table1 = (): ReactElement => {
    return (
        <table className="border-collapse w-full text-left mb-5">
            <caption className="text-lg font-bold mb-2"> My Favorite Choreographers</caption>
            <thead className="bg-sky-200">
            <tr>
                <th className="border border-gray-400 px-4 py-2">Name</th>
                <th className="border border-gray-400 px-4 py-2">Dance Style</th>
                <th className="border border-gray-400 px-4 py-2">Studio</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="border border-gray-400 px-4 py-2">Lia Kim</td>
                <td className="border border-gray-400 px-4 py-2">Hip Hop</td>
                <td className="border border-gray-400 px-4 py-2">1Million</td>
            </tr>
            <tr>
                <td className="border border-gray-400 px-4 py-2">Jose Carlos Martinez</td>
                <td className="border border-gray-400 px-4 py-2">Ballet</td>
                <td className="border border-gray-400 px-4 py-2">Paris Opera Ballet</td>
            </tr>
            <tr>
                <td className="border border-gray-400 px-4 py-2">Austin Lee</td>
                <td className="border border-gray-400 px-4 py-2">Jazz</td>
                <td className="border border-gray-400 px-4 py-2">Millennium</td>
            </tr>
            <tr>
                <td className="border border-gray-400 px-4 py-2">Mariel Madrid</td>
                <td className="border border-gray-400 px-4 py-2">Hip Hop</td>
                <td className="border border-gray-400 px-4 py-2">Urban Dance Camp</td>
            </tr>
            </tbody>
        </table>
    );
};

export default Table1;
