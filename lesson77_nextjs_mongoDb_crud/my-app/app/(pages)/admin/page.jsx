import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import TopicsList from "@/app/components/TopicsList";

export default function Admin() {
    return (
        <Container>
            <h3>Admin Page</h3>
            <Button className={"text-sm"} href={"/admin/addTopic"}>
                Add topic
            </Button>
            <TopicsList />
            <TopicsList />
            <TopicsList />
            <TopicsList />
        </Container>
    );
}
