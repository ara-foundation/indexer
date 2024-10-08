/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  ActV1,
  ActV1_CancelTask,
  ActV1_CompleteTask,
  ActV1_NewTask,
  ActV1_SetProject,
  CashierV1,
  CashierV1_Redeem,
  CashierV1_SetProject,
  ProjectV1,
  ProjectV1_NewProject,
  ProjectV1_SetSangha,
  TreasuryV1,
  TreasuryV1_CollateralVote,
  TreasuryV1_CollateralVotingAction,
  TreasuryV1_CollateralVotingInit,
  TreasuryV1_Mint,
  TreasuryV1_SetProject,
} from "generated";

ActV1.CancelTask.handler(async ({ event, context }) => {
  const entity: ActV1_CancelTask = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    projectId: event.params.projectId,
    taskId: event.params.taskId,
    payload: event.params.payload,
  };

  context.ActV1_CancelTask.set(entity);
});

ActV1.CompleteTask.handler(async ({ event, context }) => {
  const entity: ActV1_CompleteTask = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    projectId: event.params.projectId,
    taskId: event.params.taskId,
    contributor: event.params.contributor,
    payload: event.params.payload,
  };

  context.ActV1_CompleteTask.set(entity);
});

ActV1.NewTask.handler(async ({ event, context }) => {
  const entity: ActV1_NewTask = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    projectId: event.params.projectId,
    taskId: event.params.taskId,
    checkAmount_: event.params.checkAmount_,
    payload: event.params.payload,
  };

  context.ActV1_NewTask.set(entity);
});

ActV1.SetProject.handler(async ({ event, context }) => {
  const entity: ActV1_SetProject = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    projectId: event.params.projectId,
  };

  context.ActV1_SetProject.set(entity);
});

CashierV1.Redeem.handler(async ({ event, context }) => {
  const entity: CashierV1_Redeem = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    check: event.params.check,
    collateral: event.params.collateral,
    to: event.params.to,
    usdAmount: event.params.usdAmount,
    collateralAmount: event.params.collateralAmount,
  };

  context.CashierV1_Redeem.set(entity);
});

CashierV1.SetProject.handler(async ({ event, context }) => {
  const entity: CashierV1_SetProject = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    projectId: event.params.projectId,
  };

  context.CashierV1_SetProject.set(entity);
});

ProjectV1.NewProject.handler(async ({ event, context }) => {
  const entity: ProjectV1_NewProject = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    projectId: event.params.projectId,
    project_0: event.params.project
        [0]
    ,
    project_1: event.params.project
        [1]
    ,
    project_2: event.params.project
        [2]
    ,
    project_3: event.params.project
        [3]
    ,
    project_4: event.params.project
        [4]
    ,
    project_5: event.params.project
        [5]
    ,
    project_6: event.params.project
        [6]
    ,
    project_7: event.params.project
        [7]
    ,
    project_8: event.params.project
        [8]
    ,
    project_9: event.params.project
        [9]
    ,
  };

  context.ProjectV1_NewProject.set(entity);
});

ProjectV1.SetSangha.handler(async ({ event, context }) => {
  const entity: ProjectV1_SetSangha = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    projectId: event.params.projectId,
    project_0: event.params.project
        [0]
    ,
    project_1: event.params.project
        [1]
    ,
    project_2: event.params.project
        [2]
    ,
  };

  context.ProjectV1_SetSangha.set(entity);
});

TreasuryV1.CollateralVote.handler(async ({ event, context }) => {
  const entity: TreasuryV1_CollateralVote = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    voter: event.params.voter,
    agree: event.params.agree,
  };

  context.TreasuryV1_CollateralVote.set(entity);
});

TreasuryV1.CollateralVotingAction.handler(async ({ event, context }) => {
  const entity: TreasuryV1_CollateralVotingAction = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    agree: event.params.agree,
  };

  context.TreasuryV1_CollateralVotingAction.set(entity);
});

TreasuryV1.CollateralVotingInit.handler(async ({ event, context }) => {
  const entity: TreasuryV1_CollateralVotingInit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    initializer: event.params.initializer,
    token: event.params.token,
    decimals: event.params.decimals,
    feed: event.params.feed,
    feedDecimals: event.params.feedDecimals,
  };

  context.TreasuryV1_CollateralVotingInit.set(entity);
});

TreasuryV1.Mint.handler(async ({ event, context }) => {
  const entity: TreasuryV1_Mint = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    projectId_: event.params.projectId_,
    ownershipToken: event.params.ownershipToken,
    ownershipAmount: event.params.ownershipAmount,
    to: event.params.to,
    usdAmount: event.params.usdAmount,
    collateral: event.params.collateral,
    collateralAmount: event.params.collateralAmount,
  };

  context.TreasuryV1_Mint.set(entity);
});

TreasuryV1.SetProject.handler(async ({ event, context }) => {
  const entity: TreasuryV1_SetProject = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    projectId: event.params.projectId,
    tokenAmount: event.params.tokenAmount,
    usdAmount: event.params.usdAmount,
  };

  context.TreasuryV1_SetProject.set(entity);
});
