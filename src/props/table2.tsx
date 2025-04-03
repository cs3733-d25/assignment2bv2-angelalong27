import {Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow,}
    from "@/components/ui/table"

const Recipes = () => [
    {
        name: "Açaí Bowl",
        meal: "Breakfast",
        duration: "5-10 minutes"
    },
    {
        name: "Smoked Salmon Avocado Toast",
        meal: "Breakfast",
        duration: "7-10 minutes"
    },
    {
        name: "Chicken Alfredo Pasta",
        meal: "Lunch/Dinner",
        duration: "20-30 minutes"
    },
    {
        name: "Salmon Rice Bowl",
        meal: "Lunch/Dinner",
        duration: "20-45 minutes"
    },
    {
        name: "Steak with Mashed Potatoes",
        meal: "Dinner",
        duration: "30-45 minutes"
    },
];

export function Table2() {
    return (
        <Table>
            <TableCaption className="text-lg font-bold text-black text-center caption-top">Favorite Recipes to Make Right Now</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[200px] border-2 border-gray-400">Name of Dish</TableHead>
                    <TableHead className="text-center border-2 border-gray-400 px-50">Meal of the Day</TableHead>
                    <TableHead className="text-right border-2 border-gray-400">Duration to Make</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {Recipes().map((recipe, index) => (
                    <TableRow key={index}>
                        <TableCell className="text-left font-medium border-2 border-gray-400">{recipe.name}</TableCell>
                        <TableCell className="text-center border-2 border-gray-400 px-50">{recipe.meal}</TableCell>
                        <TableCell className="text-right border-2 border-gray-400">{recipe.duration}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3} className="text-left font-semibold border-2 border-gray-400">Hope you try them out!</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}