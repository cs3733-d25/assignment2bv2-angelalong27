import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const recipes = [
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
        duration: "30-45 minutes" },
];

export function Table2() {
    return (
        <Table>
            <TableCaption>Favorite Recipes to Make Right Now</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[200px]">Name of Dish</TableHead>
                    <TableHead>Meal of the Day</TableHead>
                    <TableHead className="text-right">Duration to Make</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {recipes.map((recipe, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{recipe.name}</TableCell>
                        <TableCell>{recipe.meal}</TableCell>
                        <TableCell className="text-right">{recipe.duration}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3} className="text-right font-semibold">Hope you try them out!</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}