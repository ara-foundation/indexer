import assert from "assert";
import { 
  TestHelpers,
  ActV1_CancelTask
} from "generated";
const { MockDb, ActV1 } = TestHelpers;

describe("ActV1 contract CancelTask event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for ActV1 contract CancelTask event
  const event = ActV1.CancelTask.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("ActV1_CancelTask is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await ActV1.CancelTask.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualActV1CancelTask = mockDbUpdated.entities.ActV1_CancelTask.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedActV1CancelTask: ActV1_CancelTask = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      projectId: event.params.projectId,
      taskId: event.params.taskId,
      payload: event.params.payload,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualActV1CancelTask, expectedActV1CancelTask, "Actual ActV1CancelTask should be the same as the expectedActV1CancelTask");
  });
});
