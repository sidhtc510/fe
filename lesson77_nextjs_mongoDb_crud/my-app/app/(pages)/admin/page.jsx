import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import Topic from "@/app/components/Topic";

export default function Admin() {
    return (
        <Container>
            <h3>Admin Page</h3>
            <Button className={"text-sm"} href={"/admin/addTopic"}>
                Add topic
            </Button>
        </Container>
    );
}
