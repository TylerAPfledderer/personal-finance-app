<template>
  <div
    class="grid h-dvh bg-beige-100 max-lg:grid-rows-[min-content] lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)]"
  >
    <header class="flex lg:p-5">
      <div
        class="size-full overflow-hidden bg-grey-900 max-lg:px-10 max-lg:py-6 lg:grid lg:rounded-xl lg:[&>*]:[grid-area:1/1]"
      >
        <img alt="" class="m-auto lg:hidden" src="/images/logo-large.svg" />
        <img
          alt=""
          class="max-lg:hidden"
          src="/images/illustration-authentication.svg"
        />
        <div
          class="flex flex-col items-start justify-between p-10 text-white max-lg:hidden"
        >
          <img alt="" src="/images/logo-large.svg" />
          <div class="grid gap-6">
            <span class="text-preset-1">
              Keep track of your money and save for your future
            </span>
            <span>
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </span>
          </div>
        </div>
      </div>
    </header>
    <main class="flex h-full items-center justify-center px-4">
      <slot></slot>
    </main>
  </div>
</template>
