import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "Techori. - Store Dashboard",
    description: "Techori. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
